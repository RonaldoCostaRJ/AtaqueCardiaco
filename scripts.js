/*
  --------------------------------------------------------------------------------------
  Função para obter a lista completa de informações existente do servidor via requisição GET na API
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  id_paciente = document.getElementById("btconsultaPacientes").value="";
  limpaList();
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
      .then((data) => {
      
      data.pacientes.forEach(item => insertList(item.id,item.age,item.sex, item.cp, item.trtbps, item.chol, item.fbs, item.restecg,
        item.thalachh, item.exng, item.oldpeak, item.slp,item.caa,item.thall,item.output))      
        
      })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para obter um único registro de uma busca a partir de um nome de modelo de automóvel indicado via requisição GET
  --------------------------------------------------------------------------------------
*/
const getPaciente = async () => {

  id_paciente = document.getElementById("consultaPaciente").value;
  

  ///Nome do modelo deve ser passado para o endpoint
  let url = 'http://127.0.0.1:5000/paciente?id=' + id_paciente;
  ////////////////////////
  fetch(url, {
    method: 'get',  })
    .then((response) => response.json())
      .then((data) => {
        item=data;
        ///chama a função limpa lista para limpar os dados do grid e manter somente o modelo retornado via API
        limpaList();
        ////insere os dados no grid
        insertList(item.id, item.age,item.sex, item.cp, item.trtbps,item.chol, item.fbs,
        item.restecg, item.thalachh, item.exng, item.oldpeak,item.slp,item.caa,item.thall, item.output )    
        
      })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Chamada da função para limpar os dados da table, mantendo somente a linha do título
  --------------------------------------------------------------------------------------
*/
const limpaList = async () => {

  var table = document.getElementById('myTable');
  var linhas =  table.getElementsByTagName('tr');
  var numlinhas = linhas.length;
  while (numlinhas > 1) {
    table.deleteRow(numlinhas-1);
    numlinhas = linhas.length;
  }

}
/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
onload = function () {
  getList()
};
/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputage, inputsex, inputcp, inputtrtbps, inputchol, inputfbs,
  inputrestecg, inputthalachh, inputexng,inputoldpeak, inputslp,inputcaa, inputthall) => {

  

  const formData = new FormData();
  formData.append('age', inputage);
  formData.append('sex', inputsex);
  formData.append('cp', inputcp);
  formData.append('trtbps', inputtrtbps);  
  formData.append('chol', inputchol);
  formData.append('fbs', inputfbs);
  formData.append('restecg', inputrestecg);
  formData.append('thalachh', inputthalachh);
  formData.append('exng', inputexng);
  formData.append('oldpeak', inputoldpeak);
  formData.append('slp', inputslp);
  formData.append('caa',inputcaa);
  formData.append('thall',inputthall);
  /*formData.append('output',inputoutput);*/
  
  
  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}


/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById('myTable');
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      ///indica o índice da coluna contendo o nome do modelo, que neste caso é zero(0).
      const idItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza que deseja excluir " +idItem + " ?")) {
        div.remove()
        deleteItem(idItem)
        alert("O modelo " + idItem + " foi  removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  
  let url = 'http://127.0.0.1:5000/paciente?&id=' + item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item ........
  --------------------------------------------------------------------------------------
*/

const newItem = () => {
  
 
  let inputage = document.getElementById("age").value;
  let inputsex = document.getElementById("sex-select").value;
  let inputcp = document.getElementById("cp-select").value;
  let inputtrtbps = document.getElementById("trtbps").value;
  let inputchol = document.getElementById("chol").value;
  let inputfbs = document.getElementById("fbs-select").value;
  let inputrestecg = document.getElementById("restecg-select").value;
  let inputthalachh = document.getElementById("thalachh").value;
  let inputexng = document.getElementById("exng-select").value;
  let inputoldpeak = document.getElementById("oldpeak").value;
  let inputslp = document.getElementById("slp-select").value;
  let inputcaa = document.getElementById("caa-select").value;
  let inputthall = document.getElementById("thall-select").value;
 

   //insertList(inputage, inputsex, inputcp, inputtrtbps, inputchol, inputfbs,
     // inputrestecg, inputthalachh, inputexng,inputoldpeak, inputslp,inputcaa, inputthall)
      
    postItem (inputage, inputsex, inputcp, inputtrtbps, inputchol, inputfbs,
      inputrestecg, inputthalachh, inputexng,inputoldpeak, inputslp,inputcaa, inputthall)
            alert(" Predição e cadastro realizados com sucesso!")
      getList()
  }




/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (id, age,sex, cp, trtbps, chol, fbs, restecg, thalachh,exng, oldpeak, slp, caa, thall, output) => {
  
  var item = [id, age, sex, cp, trtbps, chol, fbs, restecg, thalachh,exng, oldpeak, slp, caa, thall, output];
   
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1))
  
  document.getElementById("age").value= "";
  document.getElementById("sex-select").value= "";
  document.getElementById("cp-select").value= "";
  document.getElementById("restecg-select").value= "";
  document.getElementById("thall-select").value= "";
  document.getElementById("exng-select").value= "";
  document.getElementById("caa-select").value= "";
  document.getElementById("fbs-select").value= "";
  document.getElementById("slp-select").value= "";
  document.getElementById("oldpeak").value= "";
  document.getElementById("chol").value= "";
  document.getElementById("trtbps").value= "";
  document.getElementById("thalachh").value= "";
  
  


  removeElement()
}