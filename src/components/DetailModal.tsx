import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getDates, getName, getAddress } from '../utils';
import { AddressIcon, CrossIcon, DateIcon, DobIcon, NameIcon } from '../icons';

type DetailModalProps = {
    open: boolean;
    imageDetails: string;
    closeModal: () => void;
    selectedState: string;
};

function DetailModal(props: DetailModalProps) {
    const { open, imageDetails, closeModal, selectedState } = props;

    const cancelButtonRef = React.useRef(null);

    const dates = getDates(imageDetails);
    const names = getName(imageDetails, selectedState);
    const address = getAddress(imageDetails, selectedState);

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={closeModal}
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 top-24 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform 
                                    overflow-hidden rounded-2xl bg-white 
                                    text-left shadow-xl transition-all 
                                    sm:my-8 sm:w-full sm:max-w-lg"
                            >
                                <div className="rounded-2xl border-8 border-solid border-[#ECF3FF] bg-white px-8 py-4">
                                    <div className="flex border-b border-solid border-[#EAEBF2] pb-2 font-bold uppercase text-[#19589B]">
                                        {selectedState} Driver license
                                        <button
                                            onClick={closeModal}
                                            className="ml-auto mr-2 block focus:outline-none"
                                        >
                                            <CrossIcon />
                                        </button>
                                    </div>
                                    <div className="min-h-28">
                                        <div className="p-1">
                                            <div className="flex gap-2">
                                                <NameIcon />
                                                <div className=" text-gray-400 ">
                                                    Name
                                                </div>
                                            </div>
                                            <div className="px-6">{names}</div>
                                        </div>
                                        <div className="flex gap-2 p-1">
                                            <DobIcon />
                                            <div className=" text-gray-400 ">
                                                DOB
                                            </div>
                                            <div>{dates[0]}</div>
                                        </div>
                                        <div className="flex gap-2 p-1">
                                            <DateIcon />
                                            <div className=" text-gray-400 ">
                                                ISS
                                            </div>
                                            <div className=" rounded-lg bg-green-100 px-1 text-green-600">
                                                {dates[1]}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 p-1">
                                            <DateIcon />

                                            <div className=" text-gray-400 ">
                                                EXP
                                            </div>
                                            <div className=" rounded-lg bg-red-100 px-1 text-red-600">
                                                {dates[2]}
                                            </div>
                                        </div>
                                        <div className="p-1 ">
                                            <div className="flex gap-2">
                                                <AddressIcon />
                                                <div className=" text-gray-400 ">
                                                    Address
                                                </div>
                                            </div>
                                            <div className="px-6">
                                                {address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default DetailModal;
