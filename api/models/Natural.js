


module.exports = {
  connection: 'PostgresqlServer',
  attributes: {
    Sexo: {
      type: 'string',
      size:10
    },
    Puntos: {
      type: 'float'
    },
    Codigo_postal: {
      type: 'float',
      size:20
    },
    Presupuesto: {
      type: 'float'
    },
    idusuario:{
      model:'Usuario',
      required: true
    }
  }
};

