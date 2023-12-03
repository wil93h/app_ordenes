<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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

        
        return response()->json(
            [
                "status" => 200,
                "message" => $request->customerName,
                "data" => [],
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
