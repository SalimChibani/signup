import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose"
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://salimshibani5:2010@cluster0.emewgko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    SignupModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
