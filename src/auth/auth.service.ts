import { Injectable } from "@nestjs/common";
import initJWTService from 'jwt-service';

@Injectable()
export class AuthService {
  jwtService:any;
  constructor() {
    this.launchService();
  }

  async launchService(){
    this.jwtService = await initJWTService({
      JWT: {
        secret: process.env.JWT_SECRET,
        duration: '2d',
        tolerance: '2h',
        algorithms: ['HS256'],
      },
      log: console.log.bind(console),
      time: Date.now.bind(Date),
    });
  }

  login(user) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}
