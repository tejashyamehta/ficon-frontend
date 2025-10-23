import "./Clients.css"

const Clients = () => {
  const clients = [
    "Reliance Industries",
    "Shell India",
    "Hindustan Petroleum",
    "Rashtriya Chemicals & Fertilisers",
    "Cipla Limited",
    "Raymond Group",
    "Galaxy Surfactants",
    "Piramal Enterprises",
    "Aristo Pharmaceuticals",
    "HDFC Bank",
    "ICICI Bank",
    "Grand Hyatt",
    "Tata Chemicals",
    "Asian Paints",
    "Godrej Industries",
    "Mahindra Group",
  ]

  const industries = [
    {
      name: "Petrochemicals & Refineries",
      description: "Fire safety solutions for oil & gas processing facilities",
      clients: ["Reliance Industries", "Shell India", "Hindustan Petroleum"],
    },
    {
      name: "Pharmaceutical",
      description: "Compliant fire protection for pharmaceutical manufacturing",
      clients: ["Cipla Limited", "Piramal Enterprises", "Aristo Pharmaceuticals"],
    },
    {
      name: "Chemical Industries",
      description: "Specialized protection for chemical processing plants",
      clients: ["Rashtriya Chemicals", "Tata Chemicals", "Asian Paints"],
    },
    {
      name: "Commercial & Banking",
      description: "Comprehensive security and fire safety for commercial buildings",
      clients: ["HDFC Bank", "ICICI Bank", "Grand Hyatt"],
    },
  ]

  return (
    <div className="clients">
      <div className="container">
        <div className="page-header">
          <h1>Our Clients</h1>
          <p>Trusted by leading companies across various industries</p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              {client}
            </div>
          ))}
        </div>

        <div className="industries-section">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
                <div className="industry-clients">
                  <h4>Key Clients:</h4>
                  <ul>
                    {industry.clients.map((client, clientIndex) => (
                      <li key={clientIndex}>{client}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
