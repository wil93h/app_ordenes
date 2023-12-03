import { Modal } from "@mui/material";
import { useFormContext } from 'react-hook-form';

export const ModalCustom = ({ className = "", children }) => {
    const {
        watch,
        setValue,
        resetField,
        getValues
    } = useFormContext();
    const handleClose = () =>{
        setValue('modal',!watch('modal'))
        resetField('arrayProducts');
        resetField('customerName');
        resetField('customerLastName');
        resetField('customerAddress');
        // console.log("🚀 ~ file: ModalCustom.jsx:11 ~ ModalCustom ~ getValues:", getValues())
    }
    return (
        <Modal
            open={watch('modal')}
            onClose={handleClose}
            maxWidth="md" fullWidth
        >
            {children}
        </Modal>
    );
};

