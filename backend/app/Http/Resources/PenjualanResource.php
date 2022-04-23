<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PenjualanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            "id" => $this->id,
            "barang_id" => $this->barang_id,
            "nama_barang" => $this->barang->nama_barang,
            "stok" => $this->barang->stok - $this->jumlah_terjual,
            "jumlah_terjual" => $this->jumlah_terjual,
            "tanggal_transaksi" => $this->tanggal_transaksi,
            "jenis_barang" => $this->barang->jenisBarang->name,
        ];
    }
}
