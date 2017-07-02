import pyjsonrpc


class RequestHandler(pyjsonrpc.HttpRequestHandler):
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        print "add is called with %d and %d" % (a, b)
        return a + b


SERVER_HOST = 'localhost'
SERVER_PORT = 4040

http_server = pyjsonrpc.ThreadingHttpServer(
    server_address=(SERVER_HOST, SERVER_PORT),
    RequestHandlerClass=RequestHandler
)

print "Start Http server on %s:%d" % (SERVER_HOST, SERVER_PORT)

http_server.serve_forever()
