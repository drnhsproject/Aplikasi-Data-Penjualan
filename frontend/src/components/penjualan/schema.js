import * as Yup from 'yup'

const penjualanSchema = Yup.object().shape({
    tanggal_transaksi: Yup.string().required('Required',)
})

export default penjualanSchema;