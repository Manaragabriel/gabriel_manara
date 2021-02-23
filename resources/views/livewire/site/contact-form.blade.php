<form wire:submit.prevent="sendContact">
<div class="row">
             
                  <div class="col-sm-12 col-lg-6">
                      <div class="form-group">
                          <label for="name"  class="font-weight-bold">Seu Nome *:</label>
                          <input type="text" wire:model.defer="name" name="name" id="name" class="form-control" placeholder="Digite seu nome"/>
                      </div>
                      @error('name')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                      {{$name}}
                  </div>


                  <div class="col-sm-12 col-lg-6">
                      <div class="form-group">
                          <label for="email" class="font-weight-bold">Seu Email *:</label>
                          <input type="text" wire:model.defer="email" name="email" id="email" class="form-control" placeholder="Digite seu email"/>
                      </div>
                      @error('email')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                  </div>

                  <div class="col-sm-12 col-lg-6">
                      <div class="form-group">
                          <label for="phone" class="font-weight-bold">Seu Telefone / Celular *:</label>
                          <input type="text" wire:model.defer="phone" name="phone" id="phone" class="form-control" placeholder="Digite seu telefone"/>
                      </div>
                      @error('phone')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                  </div>
              
                  <div class="col-sm-12 col-lg-6">
                      <div class="form-group">
                          <label for="company" class="font-weight-bold">Nome da sua empresa *:</label>
                          <input type="text" wire:model.defer="company" name="company" id="company" class="form-control" placeholder="Digite o nome da sua empresa "/>
                      </div>
                      @error('company')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                  </div>

                  <div class="col-sm-12 col-lg-12">
                      <div class="form-group">
                          <label for="message" class="font-weight-bold">Deixe sua mensagem *:</label>
                          <textarea rows="7" wire:model.defer="message" name="message" id="company" class="form-control" placeholder="Deixe sua mensagem "></textarea>
                      </div>
                      @error('message')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                  </div>

                  <div class="col-sm-12 col-lg-12">
                      <div class="form-group">
                         <input type="checkbox" value="true" wire:model="accept"/><span class="ml-2">Eu autorizo a Wolf8b Tecnólogia a armazenar meus dados fornecidos por este formulário</span>
                      </div>
                      @error('message')
                        <span class="text-danger">{{$message}}</span>
                      @enderror
                  </div>

                  <div class="text-center">
                      <button type="submit" class="theme-btn theme-btn-dark-hover btn-style-three py-3">Enviar</button>
                  </div>
            
          </div>


</form>