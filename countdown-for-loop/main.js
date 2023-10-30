for (i = 10; i > 0; i--) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Counting down at ${i}`;
  }
  else if (i === 0) {
    para.textContent = "BLASTOFFFFF";
  }
  
  else {
  para.textContent = i;
  }
  
  output.appendChild(para)
  }

  for (let i = 0; i < people.length; i++) {
    if (i === 'Phil' || 'Lola') {
    refused.textContent += i;
    }
    
    else {
    admitted.textContent += i;
    }}
    