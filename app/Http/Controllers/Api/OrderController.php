<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use App\Models\PurchaseOrderDetail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {

        $allProducts = Order::
        select('pod.id as id','o.id as order_id','p.name as product','p.unit_measure' ,'c.last_name as customer_last_name','p.description','p.price','c.name as customer_name','c.address')
        ->from('orders as o')
        ->leftJoin('purchase_order_details as pod','o.id','=','pod.order_id')
        ->leftJoin('products as p','p.id','=','pod.product_id')
        ->leftJoin('customers as c','c.id','=','pod.customer_id')
        ->whereNotNull(['o.id','c.id','p.id'])
        ->get()
        ->toArray()
        ;
        $groupOrder = Order::
        select('o.id', 
        'c.last_name as customer_last_name',
        DB::raw('SUM(p.price) as total_price'),
        'c.name as customer_name',
        'c.address')
        ->from('orders as o')
        ->leftJoin('purchase_order_details as pod','o.id','=','pod.order_id')
        ->leftJoin('products as p','p.id','=','pod.product_id')
        ->leftJoin('customers as c','c.id','=','pod.customer_id')
        ->whereNotNull(['o.id','c.id','p.id'])
        ->groupBy('o.id', 'c.last_name', 'c.name', 'c.address')
        ->get()
        ->toArray()
        ;

        $dataByOrder = [];
        $arrayOnlyOrder = Order::get()->toArray();
        foreach ($arrayOnlyOrder as $value) {
            $orderArray = array_filter($allProducts , function ($obj) use($value) {
                return $obj['order_id'] == $value['id'];
            });
            if(count($orderArray)>0){
                array_push($dataByOrder,...[$value['id'] => array_values($orderArray)]);
            }
        }

        return response()->json(
            [
                "status" => 200,
                "message" => "ORDENES",
                "data" => $dataByOrder,
                "order" => $groupOrder,
            ], 200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {   try {
        $request->validate([
            'mapTable' => 'required|array',
            'mapTable.*.id' => 'required|integer',
            'mapTable.*.product' => 'required|string|max:250',
            'mapTable.*.productDescription' => 'required|string|max:250',
            'mapTable.*.unitMeasure' => 'required|string|max:250',
            'mapTable.*.price' => 'required|numeric|regex:/^\d{1,8}(\.\d{1,2})?$/',
            'customerName' => 'required|string|max:250',
            'customerLastName' => 'required|string|max:250',
            'customerAddress' => 'required|string|max:250',
        ]);

        $order = Order::create();
        $customer = Customer::create(
            [
                'name' => $request['customerName'],
                'last_name' => $request['customerLastName'],
                'address' => $request['customerAddress'],
            ]
        );
        $products = [];
        foreach ($request['mapTable'] as $product) {
            $saveProduct = Product::create([
                'name' => $product['product'],
                'description' => $product['productDescription'],
                'price' => $product['price'],
                'unit_measure' => $product['unitMeasure'],
            ]);
            PurchaseOrderDetail::create([
                'customer_id' => $customer->id,
                'product_id' => $saveProduct->id,
                'order_id' => $order->id,
            ]);
            array_push($products,$saveProduct);
        }

        
        return response()->json(
            [
                "status" => 200,
                "message" => "ORDEN GUARDADA EXITOSAMENTE",
                "data" => $products,
            ], 200
        );
    } catch (\Throwable $e) {
        DB::connection("mysql")->rollback();
        return response()->json(
            [
                "status" => 500,
                "message" => $e->getMessage(),
                "data" => [],
            ], 500
        );
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
