import "./Products.css"

const Products = () => {
  const productCategories = [
    {
      title: "Fire Extinguishers",
      products: ["ABC Powder", "CO2", "Water", "Foam", "Clean Agent"],
    },
    {
      title: "Fire Alarm Panels",
      products: ["Addressable Panels", "Conventional Panels", "Hybrid Panels", "Repeater Panels"],
    },
    {
      title: "Detection Devices",
      products: ["Smoke Detectors", "Heat Detectors", "Flame Detectors", "Gas Detectors"],
    },
    {
      title: "Suppression Systems",
      products: ["FM-200", "Novec 1230", "CO2 Systems", "Water Mist", "Foam Systems"],
    },
    {
      title: "Security Equipment",
      products: ["CCTV Cameras", "Access Control", "Intrusion Alarms", "Video Door Phones"],
    },
    {
      title: "Safety Equipment",
      products: ["Emergency Lights", "Exit Signs", "Fire Blankets", "Safety Suits"],
    },
  ]

  return (
    <div className="products">
      <div className="container">
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Quality fire safety and security products from leading manufacturers</p>
        </div>

        <div className="products-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-category">
              <h3>{category.title}</h3>
              <ul>
                {category.products.map((product, productIndex) => (
                  <li key={productIndex}>{product}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="brands-section">
          <h2>Authorized Brands</h2>
          <div className="brands-grid">
            <div className="brand-item">Bosch</div>
            <div className="brand-item">Honeywell</div>
            <div className="brand-item">Ansul</div>
            <div className="brand-item">Hochiki</div>
            <div className="brand-item">Sevo Systems</div>
            <div className="brand-item">Infinova</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
