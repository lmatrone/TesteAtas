pragma solidity 0.5.9;

contract DeliberacoesConselhoAdm {
    
    struct AtadeReuniao {
        string pauta;
        string decisao;
        string data;
    }
    
    AtadeReuniao[] public book1;
    mapping(string => AtadeReuniao) public book2;
    
    function ArquivarAta(string memory paramPauta, string memory paramDecisao, string memory paramData) public {
        AtadeReuniao memory novaAta = AtadeReuniao(paramPauta, paramDecisao, paramData);
        book1.push(novaAta);
        book2[paramPauta] = novaAta;
        
    }
    
    function ConsultaDeliberacoesConselho(uint numeroAta) public view returns (string memory) {
        return book1[numeroAta].decisao;
        
    }
    
    function ConsultarData(uint numeroAta) public view returns (string memory) {
        return book1[numeroAta].data;
    }
    
    function ConsultarPauta(uint numeroAta) public view returns (string memory) {
        return book1[numeroAta].pauta;
    }
}
