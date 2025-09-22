from http.server import HTTPServer, SimpleHTTPRequestHandler
import json

# Dados do portfólio (você pode editar ou carregar de um arquivo)
portfolio_data = {
    "nome": "Ana Carolina",
    "profissao": "Desenvolvedora & Estudante de ADS",
    "projetos": [
        {"titulo": "Site meu portofólio, "descricao": "Projeto da faculdade sobre programação web."},
        {"titulo": "Calculadora Python", "descricao": "Uma calculadora feita em Python."}
    ]
}

class PortfolioHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/data.json":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(portfolio_data).encode())
        else:
            super().do_GET()

if __name__ == "__main__":
    print("Servidor rodando em http://localhost:8000")
    httpd = HTTPServer(("localhost", 8000), PortfolioHandler)
    httpd.serve_forever()