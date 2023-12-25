"use client";

import { useState } from "react";
import Modal from "./ui/modal";
import Link from "next/link";

const ProjectInfoModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  }
  
  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <div>
        <h1 className="font-bold text-4xl">How to navigate the project?</h1>
        <p className="my-3">This is the store side of my ecommerce project. Everything present at the <Link href='https://ecommerce-admin-side.vercel.app/' className="text-blue-500 underline font-bold" target="_blank">admin side</Link> (Products, Billboards, Categories, Sizes, etc.) will be visible here.</p>
        <ul className="list-disc ml-6">
          <li>Go through each category page on the navbar to see products belonging to that category.</li>
          <li>You also have filters in each category page to filter by color size etc.</li>
          <li>On hovering each product you have a shortcut to preview the product and add it to the cart.</li>
          <li>Speaking about cart. There is a icon to access cart on the navbar. All added products will be displayed there.</li>
        </ul>
      </div>
    </Modal>
  );
}

export default ProjectInfoModal;