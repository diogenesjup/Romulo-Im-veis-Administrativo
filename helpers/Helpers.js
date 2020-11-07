class Helpers {
     
    constructor(){
        console.log("APP INIT INICIADO COM SUCESSO");
    }
    
    // CONVERTER AAAA-MM-DD > DD/MM/AAAA
    static converterData(tempData) {

        return `${tempData.getDate()}/${tempData.getMonth() + 1}/${tempData.getFullYear()}`;
        
    }

    /* CARREGAR AS MASCARAS */
	carregarMascaras(){

	    console.log("CARREGANDO MASCARAS DE FORMULÁRIOS");

	    $("#loginUsuario").inputmask("(99) 9 9999-9999");
        $("#editarPerfilCelular").inputmask("(99) 9 9999-9999");
	    $("#codigoSms").inputmask("9 9 9 9 9");

        $("#acessoAdminCelular").inputmask("(99) 9 9999-9999");
        $("#acessoAdminEditarCelular").inputmask("(99) 9 9999-9999");

        $("#clientesCelular").inputmask("(99) 9 9999-9999");
        $("#clientesCEP").inputmask("99999-999");
        $("#clientesCpf").inputmask("999.999.999-99");

        $("#cepCadastrarImovel").inputmask("99999-999");
        

	}
    
  }