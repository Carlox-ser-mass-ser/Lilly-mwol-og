FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Carlox-ser-mass-ser/Lilly-mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g

CMD ["node", "bot.js"]
