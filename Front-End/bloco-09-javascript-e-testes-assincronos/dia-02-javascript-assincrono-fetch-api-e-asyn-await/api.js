const append = async (param) => {
  const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
  const response = await fetch(apiUrl);
  const data = await response.json();
  const brl = data.usd.brl;
  const listContainer = document.querySelector('#assets-container');
  const listItem = document.createElement('li');
  listItem.innerHTML = `${param.id} (${param.symbol}): ${parseFloat(param.priceUsd * brl).toFixed(2)}`;
  listContainer.appendChild(listItem);
}

const setAsset = async (param) => {
  const apiUrl = 'https://api.coincap.io/v2/assets';
  const response = await fetch(apiUrl);
  const result = await response.json();
  const data = result.data;
  const selectedCoin = data.find((e) => e.rank === param);
  append(selectedCoin);
}

const finalProcess = async () => {
  for (let i = 1; i <= 10; i += 1) {
    await setAsset(`${i}`);
  }
}

finalProcess();
