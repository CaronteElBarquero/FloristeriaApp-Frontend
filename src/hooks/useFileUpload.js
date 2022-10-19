import { useProductStore } from "../hooks";



export const useFileUpload = () => {
    const { startDataImageUpload } = useProductStore();

    const fileUpload = async (file) => {


        const cloudUrl = 'https://api.cloudinary.com/v1_1/di0kagawe/upload';

        const formData = new FormData();
        formData.append('upload_preset', 'floristeria-proyect');
        formData.append('file', file);

        try {

            const resp = await fetch(cloudUrl, {
                method: 'POST',
                body: formData
            });


            // console.log(resp.public_id);
            if (!resp.ok) throw new Error('No se pudo subir la imagen');

            // const cloudResp = await resp.json();
            // console.log({cloudResp});

            // return cloudResp.secure_url;

            const { secure_url, public_id } = await resp.json();
            if (secure_url && public_id) {
                startDataImageUpload({ secure_url, public_id, active: true });
            }

        } catch (error) {
            console.log(error);
        }
    }

    return {
        fileUpload
    }


}






