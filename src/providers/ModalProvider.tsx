"use client";

import { MobileSearch } from "@/components/modals/MobileSearch";
import { ProductQuickViewModal } from "@/components/modals/ProductQuickView";
import React, { Suspense } from "react";

export const ModalProvider = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductQuickViewModal />
        <MobileSearch />
      </Suspense>
    </div>
  );
};
