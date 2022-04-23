import { useFormik } from 'formik'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import PenjualanForm from "@/components/penjualan/form"
import PenjualanList  from "@/components/penjualan/list"
import usePenjualan from '@/components/penjualan/customHook'
import {penjualanSchema} from "@/components/penjualan/schema"

const PenjualanPage = () => {
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
                    handleUpdatePenjualans(values)
                }else{
                    handleAddPenjualan(values)
                }
    
                resetForm()
            } catch (error) {
                console.log(error)
            }
        }
    });
    
    const {
        penjualans,
        penjualansLoading,
        penjualanError,
        getPenjualans,
        handleAddPenjualan,
        handleUpdatePenjualans,
        handleDeletePenjualans,
    } = usePenjualan(formik)

    if (penjualanError) {
        return penjualanError
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
                                <PenjualanList 
                                    penjualans={penjualans} 
                                    getPenjualans={getPenjualans}
                                    handleDeletePenjualans={handleDeletePenjualans}       
                                />
                            </div>
                        </div>
                    </div>                        
                         
                </div>                    
            </div>
        </AppLayout>
    )
}

export default PenjualanPage