<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;

    protected $fillable = [
        "barang_id",
        "jumlah_terjual",
        "tanggal_transaksi"
    ];

    public function barang()
    {
        return $this->belongsTo(Barang::class);
    }
}
