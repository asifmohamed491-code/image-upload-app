
import { useState, useRef } from "react";
import axios from "axios";
import { MdCloudUpload } from "react-icons/md";

export default function Fileupload() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [resultText, setResultText] = useState("");
    const [imageUrl, setImageUrl] = useState('');

    const fileInput = useRef();

    const saveFile = () => {

        setFile(
            fileInput.current.files[0]
        );

        setFileName(
            fileInput.current.files[0]?.name
        );
    };

    const uploadFile = async () => {

        const formData = new FormData();

        formData.append(
            "file",
            file
        );

        formData.append(
            "fileName",
            fileName
        );

        try {

            const res =
                await axios.post(
                    "http://localhost:5000/upload",
                    formData
                );

            setResultText(
                res.data.message
            );

            setImageUrl(res.data.image)

            fileInput.current.value = "";

            setTimeout(() => {
                setResultText("");
            }, 5000);

        }

        catch (ex) {

            if (
                ex.response !== undefined
            ) {

                setResultText(
                    ex.response.data.message
                );

            } else {

                setResultText(
                    "Server Error!"
                );
            }

            setTimeout(() => {
                setResultText("");
            }, 5000);
        }
    };



    return (

        <div
            className="
            w-[430px]
            bg-white/80
            backdrop-blur-md
            rounded-[32px]
            shadow-2xl
            p-8
            flex
            flex-col
            items-center
            gap-5
            "
        >

            <div
                className="
                w-28
                h-28
                rounded-full
                bg-gray-100
                flex
                justify-center
                items-center
                text-6xl
                "
            >
                <MdCloudUpload />
            </div>


            <p
                className="
                text-gray-500
                "
            >
                Select an image and upload
            </p>


            <label
                className="
                w-full
                border-2
                border-dashed
                rounded-3xl
                p-8
                text-center
                cursor-pointer
                hover:border-black
                hover:scale-[1.02]
                transition-all
                duration-300
                "
            >

                <input
                    hidden
                    type="file"
                    ref={fileInput}
                    onChange={saveFile}
                />

                {
                    fileName
                        ?
                        (
                            <div>

                                <p
                                    className="
                                    text-green-600
                                    font-semibold
                                    break-all
                                    "
                                >
                                    {fileName}
                                </p>

                            </div>
                        )

                        :

                        (

                            <div>

                                <p
                                    className="
                                    text-xl
                                    font-semibold
                                    "
                                >
                                    Click to choose image
                                </p>

                                <p
                                    className="
                                    text-gray-400
                                    text-sm
                                    mt-2
                                    "
                                >
                                    JPG PNG JPEG
                                </p>

                            </div>

                        )
                }

            </label>



            <button

                onClick={uploadFile}

                className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-black
                to-gray-700
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
                "
            >

                Upload Image

            </button>


            {
                resultText

                    ?

                    (

                        <div
                            className="
                            w-full
                            bg-gray-100
                            rounded-2xl
                            p-4
                            text-center
                            "
                        >
                            {resultText}
                        </div>

                    )

                    :

                    null
            }

            {
                imageUrl && (

                    <div
                        className="
w-full
rounded-2xl
overflow-hidden
"
                    >

                        <p
                            className="
mb-3
font-semibold
"
                        >
                            Uploaded Image
                        </p>

                        <img
                            src={imageUrl}
                            alt="uploaded"
                            className="
                            w-full
                         rounded-xl
                          "
                        />

                    </div>

                )
            }

        </div>

    );
}

