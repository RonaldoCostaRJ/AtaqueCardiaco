# Preditor Ataque Cardiaco

Este pequeno projeto faz parte da entrega do MVP da Disciplina **Qualidade de Software, Segurança e Sistemas Inteligentes** 

O objetivo é disponibilizar uma aplicação fullstack que consiga a partir de dados do frontend, execute um modelo de machine learning de classificação que faça uma predição a partir de um conjunto de dados de um paciênte.

Os dados foram utilizados a partir do dataset identificado como: Heart Attack Analysis & Prediction Dataset, do site do KAGGLE. https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset/discussion/234843

O dataset possui 15 colunas e x linhas sem dados faltantes.

Argumentos

age      : Idade
        sex      : Sexo (sex = 0 female, sex = 1 male)
        cp       : Tipo de dor no peito ( Value 1: typical angina , Value 2: atypical angina, Value 3: non-anginal pain, Value 4: asymptomatic)
        trtbps   : pressão arterial em repouso (in mm Hg)
        chol     : colestoral em mg/dl obtido através do sensor de IMC
        fbs      : (açúcar no sangue em jejum > 120 mg/dl) (1 = true; 0 = false)
        restecg  : resultados eletrocardiográficos em repouso (Value 0: normal, Value 1: ter anormalidade da onda ST-T (inversões da onda T e/ou elevação ou depressão do segmento ST > 0,05 mV)
                   Value 2: mostrando hipertrofia ventricular esquerda provável ou definitiva pelos critérios de Estes)
        thalachh : frequência cardíaca máxima alcançada
        exng     : angina induzida por exercício? (1 = yes ; 0 = no)
        old peak : Depressão do segmento ST induzida por exercício em relação ao repouso
        slp      : slope
        caa      : number of major vessels (0-3)
        thall    : thall rate
        output   : target variable (target : 0= less chance of heart attack 1= more chance of heart attack)

---

Além disso uma classe de teste foi desenvolvida para avaliar se o modelo possui acurácia superior à 77% para dados completos do dataset.

## Como executar

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

## Utilizando o FrontEnd
Diversas informações de cadastros adicionais foram colocadas em listas, que são apresentadas contendo um formulário que realiza o cadastro dos dados de um paciênte e em seguida, realiza uma padronização nos dados e executa o modelo treinado KNN previamente treinado e testado. A seguir os dados são apresentados na grade e inseridos na base de teste. Afim de evitar exposição do paciênte, a identificação utilizada é o campo ID, anonimizando o nome do paciênte, garantindo a privacidade do mesmo.

O formulário traduz em listas as informações e além do cadatro, é possível listar somente um paciênte pelo seo ID. A partir do grid é possível excluir um paciente. Desta forma métodos Get list/Get/Post/Delete e a própria execução do modelo preditor a partir do arquivo knn_heart_attack_classifier.pkl foram demostrados.
