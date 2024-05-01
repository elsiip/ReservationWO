import React, { useState } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUserGroup, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import Intimate from "../../assets/intimate 1.png";
import Seaside from "../../assets/beach 1.png";
import Grand from "../../assets/grand1.png";

const packagesData = [
    {
        title: "Intimate Wedding",
        image: Intimate,
        location: "Malang, Jawa Timur",
        capacity: "30 pax",
        price: "Rp. 35.000.000",
        inclusions: [
        "Chapel and Standart decoration",
        "Handbouquet & bouttoniere",
        "Makeup & gown for bride",
        "Tuxedo for Groom",
        "Simple Wedding cake",
        "Celebrant / priest",
        "Foto & video",
        "Legal",
        "Makeup keluarga",
        "Canape / Lunch / Dinner"
        ]
    },
    {
        title: "Seaside Elegance Wedding",
        image: Seaside,
        location: "Badung, Bali",
        capacity: "100 pax",
        price: "Rp. 210.000.000"
    },
    {
        title: "Grand Wedding",
        image: Grand,
        location: "Jakarta Selatan, DKI Jakarta",
        capacity: "1000 pax",
        price: "Rp. 315.000.000"
    }
];

export default function Packages() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const openModal = (packageItem) => {
        setSelectedPackage(packageItem);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
        <div className="text-center" style={{ maxWidth: "100%" }}>
            <h2 className="roboto-bold" style={{ fontSize: "32px", lineHeight: "40px", letterSpacing: "-0.64px", color: "#576250" }}>Packages</h2>
            <p className="roboto-regular text-base mt-[4px]" style={{ lineHeight: " 24px", color: "#B8C1B2" }}>that you will remember forever</p>
        </div>
        <div className="flex space-x-[70px] mt-[67px] mx-[185px] mb-[92px]">
            {packagesData.map((packageItem, index) => (
            <div key={index} className="card w-[305px] shadow-xl" style={{ color: "#F7F7F7" }}>
                <figure>
                    <img src={packageItem.image} alt={packageItem.title} style={{ borderRadius: "15px 15px 0px 0px" }} />
                </figure>
                <div className="card-body p-0">
                    <h2 className="card-title roboto-medium items-center justify-center text-center mt-[5.69px]" style={{ fontSize: "22px", lineHeight: "40px", letterSpacing: "-0.5px", color: "#585B56" }}>{packageItem.title}</h2>
                    <div className="flex justify-start items-center space-x-[11px] ms-[16px] mt-[8px]">
                        <FontAwesomeIcon icon={faLocationDot} className="w-[20px] h-[20px]" style={{ color: "#B8C1B2" }} />
                        <p className="roboto-regular" style={{ color: "#B8C1B2", fontSize: "15px", lineHeight: "10px", letterSpacing: "-0.3px" }}>{packageItem.location}</p>
                    </div>
                    <div className="flex justify-start items-center space-x-[11px] ms-[16px] mt-[8px]">
                        <FontAwesomeIcon icon={faUserGroup} className="w-[20px] h-[20px]" style={{ color: "#B8C1B2" }} />
                        <p className="roboto-regular text-sm" style={{ color: "#B8C1B2", fontSize: "15px", lineHeight: "10px", letterSpacing: "-0.3px" }}>{packageItem.capacity}</p>
                    </div>
                    <div className="flex justify-start items-center space-x-[11px] ms-[16px] mt-[8px]">
                        <FontAwesomeIcon icon={faMoneyBills} className="w-[20px] h-[20px]" style={{ color: "#B8C1B2" }} />
                        <p className="roboto-regular text-sm" style={{ color: "#B8C1B2", fontSize: "15px", lineHeight: "10px", letterSpacing: "-0.3px" }}>{packageItem.price}</p>
                    </div>
                    <div className="card-actions items-center justify-center mt-[38px] mb-[26px] ">
                        <button className="btn bg-[#A19E96] hover:bg-[#576250] text-white" onClick={() => openModal(packageItem)}>Detail Package</button>
                    </div>
                </div>
            </div>
            ))}
        </div>

        {selectedPackage && (
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={showModal} onClick={closeModal}>
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                    <h2 className="font-bold text-lg text-center">{selectedPackage.title}</h2>
                    <div className="px-4 py-2">
                        <h3 className="font-bold text-base">Inclusions:</h3>
                        <ul>
                            {selectedPackage.inclusions.map((inclusion, index) => (
                            <li key={index}>{inclusion}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </dialog>
        )}
        </div>
    );
}
