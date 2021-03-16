<form method="POST" wire:submit.prevent="submit" >
    <div class="form-group">
        <label for="name">{{__('Seu nome*')}}</label>
        <input type="text" wire:model.defer="name" class="form-control" id="name" placeholder="{{__('Digite seu nome*')}}">
        @error('name') <span class="text-danger">{{ __($message) }}</span> @enderror
    </div>
    <div class="form-group">
        <label for="email">{{__('Seu e-mail*')}}</label>
        <input type="email" wire:model.defer="email" class="form-control" id="email" placeholder="{{__('Digite seu email*')}}">
        @error('email') <span class="text-danger">{{ __($message) }}</span> @enderror

    </div>
    <div class="form-group">
        <label for="phone">{{__('Seu telefone/celular*')}}</label>
        <input type="text" wire:model.defer="phone" class="form-control" id="phone" placeholder="{{__('Digite seu telefone ou celular*')}}">
        @error('phone') <span class="text-danger">{{ __($message) }}</span> @enderror

    </div>
    <div class="form-group">
        <label for="message">{{__('Sua mensagem*')}}</label>
        <textarea wire:model.defer="message" class="form-control" id="message" placeholder="{{__('Deixe sua mensagem*')}}"></textarea>
        @error('message') <span class="text-danger">{{ __($message) }}</span> @enderror

    </div>

    @if(!empty($error))
        <div class="text-danger">{{$error}}</div>
    @endif
    @if(!empty($success))
        <div class="text-success">{{$success}}</div>
    @endif

    <button  class="btn bg-dark text-white">{{__('Enviar')}}</button>
</form>