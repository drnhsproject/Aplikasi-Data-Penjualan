import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { backgroundImage } from 'tailwindcss/defaulttheme'

import PenjualanForm from "@/components/penjualan/form"
import PenjualanList  from "@/components/penjualan/list"

const PenjualanPage = () => {
    const [penjualans, setPenjualans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const penjualanSchema = Yup.object().shape({
        tanggal_transaksi: Yup.string().required('Required',)
    })

    const formik = useFormik({
        initialValues: {
            barang_id:'',
            jumlah_terjual:'',
            tanggal_transaksi:''
        },
        validationSchema: penjualanSchema,
        onSubmit: async (values, {resetForm}) => {
            try {
                if (values.id) {
                    const { data } = await axios.put(
                        `http://localhost:8000/api/penjualans/${values.id}`,
                        values,
                    )

                    handleUpdatePenjualans({
                        penjualan: data.data,
                    })
                }else{
                    const { data } = await axios.post(
                        'http://localhost:8000/api/penjualans',
                        values,
                    )
                    
                    handleAddPenjualan({
                        penjualan: data.data,
                    })
                }
    
                resetForm()
            } catch (error) {
                console.log(error)
            }
        }
    });


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

    const handleAddPenjualan = ({ penjualan }) => {
        setPenjualans(prev => [...prev, penjualan]) 
    }

    const handleUpdatePenjualans = ({ penjualan }) => {
        const updatedPenjualans = penjualans.map(item => item.id === penjualan.id ? penjualan : item)

        setPenjualans(updatedPenjualans)
    }

    if (error) {
        return error
    }   

    return (
        <AppLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Data Penjualan
                </h2>
            }>

            <Head>
                <title>ADP - Penjualan</title>
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">                        
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className='flex justify-between'>
                                <PenjualanForm 
                                    handleAddPenjualan={handleAddPenjualan} 
                                    formik={formik}
                                />
                                <PenjualanList penjualans={penjualans} getPenjualans={getPenjualans}/>
                            </div>
                        </div>
                    </div>                        
                         
                </div>                    
            </div>
        </AppLayout>
    )
}

export default PenjualanPage