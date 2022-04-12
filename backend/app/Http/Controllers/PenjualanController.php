<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penjualan;
use App\Http\Resources\PenjualanResource;
use Illuminate\Support\Facades\Validator;

class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //start in here
        $penjualans = Penjualan::all();
        $penjualanResources = PenjualanResource::collection($penjualans);
        return $this->sendResponse($penjualanResources, "successfully get all data penjualan");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //code for create data start in here
        $input = $request->all();

        $validator = Validator::make($input,[
            "barang_id" => "required",
            "jumlah_terjual" => "required",
            "tanggal_transaksi" => "required"
        ]);

        if($validator -> fails()){
            return $this->sendError("Validation errors", $validator->errors());
        }

        $penjualan = Penjualan::create($input);
        
        return $this->sendResponse(new PenjualanResource($penjualan), "Data Created Successfuly");
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
