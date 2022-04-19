import { useEffect, useState } from 'react'

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { backgroundImage } from 'tailwindcss/defaulttheme'
import PenjualanForm from "@/components/penjualan/form"

const PenjualanPage = () => {
    const [penjualans, setPenjualans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchPenjualans = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:8000/api/penjualans');

            setPenjualans(data.data)    
        } catch (error) {
            setError(error, message)
        } finally{
            setLoading(false)
        }        
    }

    useEffect(() => {
        fetchPenjualans()
    }, [])

    const handleAddPenjualan = ({ penjualan }) => {
        setPenjualans(prev => [...prev, penjualan]) 
    }

    if (error) {
        return error
    }   

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Data Penjualan
                </h2>
            }>

            <Head>
                <title>ADP - Penjualan</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">                        
                        <div className="p-6 bg-white border-b border-gray-200">

                        <PenjualanForm handleAddPenjualan={handleAddPenjualan} />
                           {loading 
                                ? "Loading..." 
                                : penjualans.map(penjualan => (                        
                                    <p key={penjualan.id}> 
                                        {penjualan.id}
                                        {penjualan.nama_barang}
                                        {penjualan.stok}
                                        {penjualan.jumlah_terjual}
                                        {penjualan.tanggal_transaksi}
                                        {penjualan.jenis_barang}
                                    </p>     

                           ))}

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default PenjualanPage