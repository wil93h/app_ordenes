import  TextFieldCustom  from "../atoms/TextFieldCustom"; 

export const AddCustomer = () => {
    return (
        <div className="p-2 w-full">
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <TextFieldCustom
                        label="NOMBRE"
                        name="customerName"
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <TextFieldCustom
                        label="APELLIDO"
                        name="customerLastName"
                    />
                </div>
            </div>

            <div className="w-full">
                <TextFieldCustom
                    label="DIRECCIÓN"
                    name="customerAddress"
                />
            </div>
        </div>
    );
};
export default AddCustomer
