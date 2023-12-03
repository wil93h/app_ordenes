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
    public function index()
    {
        return "Hola";
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
