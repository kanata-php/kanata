FROM ubuntu:20.04

ARG WWWGROUP
ARG SUPERVISOR_CONF

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python2 libcurl4-openssl-dev \
    && mkdir -p ~/.gnupg \
    && chmod 600 ~/.gnupg \
    && echo "disable-ipv6" >> ~/.gnupg/dirmngr.conf \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E5267A6C \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C300EE8C \
    && echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu focal main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
    && apt-get update \
    && apt-get install -y php8.1-cli php8.1-dev \
       php8.1-pgsql php8.1-sqlite3 php8.1-gd \
       php8.1-curl php8.1-memcached \
       php8.1-imap php8.1-mysql php8.1-mbstring \
       php8.1-xml php8.1-zip php8.1-bcmath php8.1-soap \
       php8.1-intl php8.1-readline \
       php8.1-msgpack php8.1-igbinary php8.1-ldap \
       php8.1-redis \
    && php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
    && curl -sL https://deb.nodesource.com/setup_15.x | bash - \
    && apt-get install -y nodejs \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn \
    && apt-get install -y mysql-client \
    && apt-get install -y postgresql-client \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN pecl channel-update https://pecl.php.net/channel.xml \
    && pecl install --configureoptions 'enable-sockets="yes" enable-openssl="yes" enable-http2="yes" enable-mysqlnd="yes" enable-swoole-json="yes" enable-swoole-curl="yes"' openswoole

RUN apt update
RUN apt install inotify-tools -y
RUN pecl install inotify
RUN touch /etc/php/8.1/cli/conf.d/inotify.ini
RUN echo "extension=inotify.so" > /etc/php/8.1/cli/conf.d/inotify.ini

RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.1

COPY start-container /usr/local/bin/start-container
COPY $SUPERVISOR_CONF /etc/supervisor/conf.d/supervisord.conf
COPY php.ini /etc/php/8.1/cli/conf.d/99-wt.ini
RUN chmod +x /usr/local/bin/start-container
COPY inotify.sh /inotify.sh
RUN chmod +x /inotify.sh

EXPOSE 8001
EXPOSE 8002

ENTRYPOINT ["start-container"]