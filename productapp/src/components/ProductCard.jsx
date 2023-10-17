export default function ProductCard({ product }) {
    let { id, productDescription, productImageUrl, productName, productPrice } = product;
    return <div className="col-md-4 col-xl-3">
        <div className="card">
            <img src={productImageUrl} class="card-img-top" alt="Mobile" />
            <div class="card-body">
                <h5 class="card-title">{productName}</h5>
                <p class="card-text">
                    {productDescription}
                </p>
            </div>
            <div className="card-footer">
                Rs. {productPrice}
            </div>
        </div>
    </div>
}