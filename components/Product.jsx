import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={300}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-proce">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
