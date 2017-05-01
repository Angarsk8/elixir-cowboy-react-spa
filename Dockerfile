FROM bitwalker/alpine-erlang:6.1

ENV HOME=/opt/app/ TERM=xterm

# Install Elixir and basic build dependencies
RUN \
    echo "@edge http://nl.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories && \
    apk update && \
    apk --no-cache --update add \
      git make g++ nodejs python \
      elixir@edge && \
    rm -rf /var/cache/apk/*

# Install Hex+Rebar
RUN mix local.hex --force && \
    mix local.rebar --force

WORKDIR /opt/app

ENV MIX_ENV=prod REPLACE_OS_VARS=true SHELL=/bin/sh

# Cache elixir deps
COPY config/ ./config/
COPY mix.exs mix.lock ./
RUN mix do deps.get, deps.compile, compile

# Cache node deps
COPY client/ ./client/
RUN npm install --prefix client/

COPY . .

RUN npm run build --prefix client/
RUN rm -r client/

RUN mix release --env=prod --verbose