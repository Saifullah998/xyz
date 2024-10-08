// pages/rail-fence-cipher.js

import BreadCrumb from '../../../components/breadcrumb';
import RailFence from "./../(railfence)/railfence"


export const metadata = {
    title: "Fence Rail Cipher",
    description: "Explore the Rail Fence Cipher, a transposition cipher where plaintext zigzags across multiple rails and is read off row by row.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "Rail Fence Cipher Decoder",
        description: "Explore the Rail Fence Cipher, a transposition cipher where plaintext zigzags across multiple rails and is read off row by row.",
        type: "website",
        url: "https://nexusencryption.com/",
        image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
        site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/rail-fence-cipher",
    language: "en-US",
    category: 'ciphers',
};



const RailFenceCipher = () => {


    return (
        <>
            <BreadCrumb />
            <RailFence />
        </>
    );
};

export default RailFenceCipher;
