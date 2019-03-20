export const produto = [
    {
        categoria:[
            {
                descrição: "",
                nome: ""
            }
        ]
    },
    {
        item:[
            {
                dataCompra: "",
                dataValidade: "",
                fornecedorToken: "",
                preço: "",
                quantidade: 0
            }

        ]
  },
  {
        marca:[
            {
                nome: ""
            }
        ]
  },
  {
      unidadeMedida:[
          {
              abreviação: "",
              descrição: ""
          }         
      ]

  },
  minimoEstoque: 0,
  nome: ""  
];

export const usuario = [
    {
        empresa:[
            {
                endereço:[
                    {
                        rua: ""
                    }
                ]
            },
            {
                fornecedor:[
                    {
                        nome: "Fornecedor Z"
                    },
                    {
                        produtos:[
                            {
                                nome: "Arroz",
                                token: "arrozToken23x"
                            }
                        ]
                    }
                ]
            },
            {
                restaurante:[
                    {
                        endereço:[
                            {
                                rua: ""
                            }
                        ]
                    },
                    {
                        estoque:[
                            {
                                descrição: "",
                                nome: ""
                            }
                        ]
                    }
                    restaurante: "restaurante x"
                ]
            }
            ativo: true,
            nome: "Padaria X"
        ]
        administrador: true,
        ativo: true,
        email: "",
        nome: José,
        papel: ""
    },
    {
        empresa:[
            {
                nome: "Padaria X"
            }
        ],
        email: "",
        nome: "Maria",
        papel: ""
    }
];
