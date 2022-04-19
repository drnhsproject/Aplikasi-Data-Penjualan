import React from 'react'
import PropTypes from 'prop-types'

const PenjualanList = ({ penjualans = [] }) => {
    return penjualans.map(penjualan => (
            <p key={penjualan.id}>
                {penjualan.id}
                {penjualan.nama_barang}
                {penjualan.stok}
                {penjualan.jumlah_terjual}
                {penjualan.tanggal_transaksi}
                {penjualan.jenis_barang}
            </p>
    ))
}

PenjualanList.propTypes = {
    penjualans: PropTypes.array.isRequired,
}

export default PenjualanList