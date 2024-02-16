import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getDates, getNames } from '../utils';
import { CrossIcon } from '../icons';

type DetailModalProps = {
    open: boolean;
    imageDetails: string;
    closeModal: () => void;
};

function DetailModal(props: DetailModalProps) {
    const { open, imageDetails, closeModal } = props;

    const cancelButtonRef = React.useRef(null);

    const dates = getDates(imageDetails);
    const names = getNames(imageDetails);

    console.log("names: >>>", names)

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
                                        Driver license
                                        <button
                                            onClick={closeModal}
                                            className="ml-auto mr-2 block focus:outline-none"
                                        >
                                            <CrossIcon />
                                        </button>
                                    </div>
                                    <div className="min-h-28">
                                        {imageDetails}
                                        <br />
                                        DOB: {dates[0]} <br />
                                        ISS: {dates[1]} <br />
                                        EXP: {dates[2]} <br/>
                                    </div>
                                    <div>
                                        Name: {names}
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
