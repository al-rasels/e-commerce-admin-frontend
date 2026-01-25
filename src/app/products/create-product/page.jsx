"use client";
import React, { useState } from "react";
import AdditionalForm from "@/Components/Forms/AdditionalForm";
import AttributesForm from "@/Components/Forms/AttributesForm";
import GeneralForm from "@/Components/Forms/GeneralForm";
import InventoryForm from "@/Components/Forms/InventoryForm";
import LinkedProductsForm from "@/Components/Forms/LinkedProductsForm";
import MediaForm from "@/Components/Forms/MediaForm";
import PricingForm from "@/Components/Forms/PricingForm";
import SeoForm from "@/Components/Forms/SeoForm";
import VariationsForm from "@/Components/Forms/VariationsForm";
import TabbedLayout from "@/Components/Layout/TabbedLayout";

const CreateProduct = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Navigation function
  const nextTab = () => {
    setSelectedIndex((prev) => prev + 1);
  };
  const productTabs = [
    {
      label: "General",
      component: <GeneralForm onNext={nextTab} />,
    },
    {
      label: "Media",
      component: <MediaForm onNext={nextTab} />,
    },
    {
      label: "Attributes",
      component: <AttributesForm onNext={nextTab} />,
    },
    {
      label: "Variations",
      component: <VariationsForm onNext={nextTab} />,
    },
    {
      label: "Pricing",
      component: <PricingForm onNext={nextTab} />,
    },
    {
      label: "Inventory",
      component: <InventoryForm onNext={nextTab} />,
    },
    {
      label: "SEO",
      component: <SeoForm onNext={nextTab} />,
    },
    {
      label: "Additional",
      component: <AdditionalForm onNext={nextTab} />,
    },
    {
      label: "Linked Products",
      component: <LinkedProductsForm />,
    },
  ];
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl text-primary font-bold">Add New Product</h1>
        <div>
          <button type="submit" className="btn btn-primary btn-outline">
            Save Product
          </button>
        </div>
      </div>
      <TabbedLayout
        tabs={productTabs}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      ></TabbedLayout>
    </div>
  );
};

export default CreateProduct;
