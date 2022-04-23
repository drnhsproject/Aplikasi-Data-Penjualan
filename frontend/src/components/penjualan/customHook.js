import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const usePenjualan = (formik) => {
    const [penjualans, setPenjualans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('http://localhost:8000/api/penjualans');
    
                setPenjualans(data.data)    
            } catch (error) {
                setError(error, message)
            } finally{
                setLoading(false)
            }        
        })()
    }, [])

    const getPenjualans = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/penjualans/${id}`); 

            const penjualans = data.data;

            formik.setFieldValue('barang_id', penjualans.barang_id)
            formik.setFieldValue('jumlah_terjual', penjualans.jumlah_terjual,)
            formik.setFieldValue('tanggal_transaksi', penjualans.tanggal_transaksi)
            formik.setFieldValue('id', penjualans.id)

        } catch (error) {
            console.log(error)
        }
    }

    const handleAddPenjualan = async ( values ) => {
        const { data } = await axios.post(
            'http://localhost:8000/api/penjualans',
            values,
        )

        const penjualan = data.data;

        setPenjualans(prev => [...prev, penjualan]) 
    }

    const handleUpdatePenjualans = async ( values ) => {
        const { data } = await axios.put(
            `http://localhost:8000/api/penjualans/${values.id}`,
            values,
        )

        const penjualan = data.data;

        const updatedPenjualans = penjualans.map(item => item.id === penjualan.id ? penjualan : item)

        setPenjualans(updatedPenjualans)
    }

    const handleDeletePenjualans = async (id) => {

        const isOK = confirm("Are you sure want to delete this data ?");

        if (isOK) {
            try {
                await axios.delete(`http://localhost:8000/api/penjualans/${id}`);

                const filteredPenjualans = penjualans.filter(item => item.id !== id)

                setPenjualans(filteredPenjualans)
            } catch (error) {
                console.log(error);
            }
        }
    }

    return {
        penjualans,
        penjualansLoading: loading,
        penjualanError: error,
        getPenjualans,
        handleAddPenjualan,
        handleUpdatePenjualans,
        handleDeletePenjualans,
    }
}

export default usePenjualan;