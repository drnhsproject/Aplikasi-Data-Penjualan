import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/form/button'

const PenjualanList = ({ penjualans = [], getPenjualans, handleDeletePenjualans }) => {
    return <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="bg-gray-800 border-b">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Nomor
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Nama Barang
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Jumlah Terjual
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Tanggal Transaksi
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Jenis Barang
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-white">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {penjualans.map((penjualan, index) => (   
                                    <tr className="bg-white border-b" key={penjualan.id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {index+1}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            {penjualan.nama_barang}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            {penjualan.stok}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            {penjualan.jumlah_terjual}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            {penjualan.tanggal_transaksi}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            {penjualan.jenis_barang}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-center space-x-2">
                                                <div>                                                    
                                                    <div>
                                                        <Button 
                                                            className="mr-2"
                                                            variant="success"
                                                            onClick={() => getPenjualans(penjualan.id)}>
                                                                Edit
                                                        </Button>
                                                        <Button 
                                                            variant="danger"
                                                            onClick={() => handleDeletePenjualans(penjualan.id)}>
                                                                Delete
                                                        </Button>
                                                    </div>
     
                                                </div>
                                            </div>                                           
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>          
}

PenjualanList.propTypes = {
    penjualans: PropTypes.array.isRequired,
}

export default PenjualanList