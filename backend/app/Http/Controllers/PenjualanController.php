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

        $penjualans = Penjualan::create($input);
        
        return $this->sendResponse(new PenjualanResource($penjualans), "Data Created Successfuly");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $penjualans = Penjualan::find($id);

        return $this->sendResponse(new PenjualanResource($penjualans), "Data Created Successfuly");
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
        //for update data
        $input = $request->all();

        $validator = Validator::make($input,[
            "barang_id" => "required",
            "jumlah_terjual" => "required",
            "tanggal_transaksi" => "required"
        ]);

        if($validator -> fails()){
            return $this->sendError("Validation errors", $validator->errors());
        }

        $penjualans = Penjualan::find($id);
        
        $penjualans->barang_id = $input['barang_id'];
        $penjualans->jumlah_terjual = $input['jumlah_terjual'];
        $penjualans->tanggal_transaksi = $input['tanggal_transaksi'];
        $penjualans->save();

        return $this->sendResponse(new PenjualanResource($penjualans), "Data Updated Successfuly");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $penjualans = Penjualan::find($id);

        $penjualans->delete();

        return $this->sendResponse([], "Data Deleted Successfuly");
    }
}
