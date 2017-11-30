import { async } from '@angular/core/testing';
import { LoginForm} from "./login";


describe('Login Form', () => {
  let app: LoginForm;
  beforeEach(()=>{
    app = new LoginForm();
  });
  it('should create component LoginForm', async(() => {
    //const fixture = TestBed.createComponent(LoginPage);
    //const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
