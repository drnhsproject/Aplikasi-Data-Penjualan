import {useState} from 'react'
import PropTypes from 'prop-types'
import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'
import axios from '@/lib/axios'

const Form = ({handleAddPenjualan})=> {
    const [form, setForm] = useState({
        barang_id: 0,
        jumlah_terjual: 0,
        tanggal_transaksi: '',
    })

    const handleChangeInput = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: [e.target.value]
        }))
    }

    const [error, setError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                'http://localhost:8000/api/penjualans',
                form,
            )
            
            handleAddPenjualan({
                penjualan: data.data,
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (error) {
        return error
    }   


    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <FormControl 
                    label="Barang ID" 
                    id="barang_id" 
                    name="barang_id"
                >
                    <Input 
                        placeholder="input barang id" 
                        name="barang_id"
                        type="number"
                        onChange={handleChangeInput}
                    />
                </FormControl>
                <FormControl 
                    label="Jumlah Terjual" 
                    id="jumlah_terjual" 
                    name="jumlah_terjual"
                >
                    <Input 
                        placeholder="input jumlah terjual" 
                        name="jumlah_terjual"
                        type="number"
                        onChange={handleChangeInput}
                    />
                </FormControl>
                <FormControl 
                    label="Tanggal Transaksi" 
                    id="tanggal_transaksi" 
                    name="tanggal_transaksi"
                >
                    <Input 
                        placeholder="input tanggal transaksi" 
                        name="tanggal_transaksi"                  
                        onChange={handleChangeInput}
                    />
                </FormControl>

                <Button type="submit">Submit</Button>                
            </form>
           {/* { <pre>
                {JSON.stringify(form, null, 2)}
            </pre>} */}
        </div>
    )
}

Form.propTypes = {}

export default Form
