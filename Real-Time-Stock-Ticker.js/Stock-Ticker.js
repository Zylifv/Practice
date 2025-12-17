function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')
    
    
    stockDisplayName.textContent = getStockData().name;
    stockDisplaySymbol.textContent = getStockData().sym;
    stockDisplayPrice.textContent = getStockData().price;
    stockDisplayTime.textContent = getStockData().time;
  
    setInterval(() => {
    stockDisplayPriceIcon.className = "";
      let prev = stockDisplayPrice.value;
      stockDisplayPrice.value = (Math.random() * 2).toFixed(2);
      if (stockDisplayPrice.value > prev) {
        stockDisplayPriceIcon.classList.add("triangle-up")
      } else if (stockDisplayPrice.value < prev) {
        stockDisplayPriceIcon.classList.add("triangle-down")
      } else {
        stockDisplayPriceIcon.classList.add("triangle-right");
      }
      stockDisplayPrice.textContent = " " + stockDisplayPrice.value;
      stockDisplayTime.textContent = new Date().toLocaleTimeString();;
    }, 1500)
}

renderStockTicker();

function getStockData() {
    return {
        name: 'QtechIND',
        sym: 'QTI',
        price: '2.00',
        time: new Date().toLocaleTimeString()
    }
}
