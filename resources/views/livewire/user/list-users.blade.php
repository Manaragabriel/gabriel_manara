
    <div class="card my-3">
        <div class="card-header bg-secondary text-white">
            <h3 class="card-title">Lista de usuários do seu site</h3>

            <div class="card-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" wire:model="search" name="table_search" class="form-control float-right" placeholder="Pesquisar">

                    <div class="input-group-append">
                        <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                      
                    </tr>
                </thead>
                <tbody>
               
                @foreach($users as $user)
                    <tr>
                        <td>{{$user->id}}</td>
                        <td>{{$user->name}}</td>
                        <td>{{$user->email}}</td>
                        <td>
                            <a class="btn" href="/admin/usuarios/editar/{{$user->id}}">
                                <i class="fas fa-edit"></i>
                            </a>
                            <form method="post" action="/admin/usuarios/{{$user->id}}" class="d-inline">
                            {{csrf_field()}}
                            {{method_field('delete')}}
                                <button class="btn" type="submit">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </form>
                        </td>
                        
                    </tr>
                @endforeach

                </tbody>
            </table>

           
        </div>
      
    </div>