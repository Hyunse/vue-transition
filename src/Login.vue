<template>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-card>
              <form-helper
                title="로그인하기"
                button-name="로그인"
                @submit="login">
  
                <h5>이메일을 입력해주세요.</h5>
                <b-form-input
                  name="email"
                  v-model="email"
                  v-validate="'required|email'"
                  :state="errors.has('email') ? 'invalid' : null"
                  placeholder="이메일">
                </b-form-input>
                <span v-show="errors.has('email')">
                  {{ errors.first('email') }}
                </span>
  
                <br>
  
                <b-form-input
                  name="password"
                  v-model="password"
                  type="password"
                  v-validate="'required'"
                  :state="errors.has('password') ? 'invalid' : null"
                  placeholder="패스워드">
                </b-form-input>
                <span v-show="errors.has('password')">
                  {{ errors.first('password') }}
                </span>
              </form-helper>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
    import FormHelper from '@/components/FormHelper'
    export default {
      name: 'Login',
      data () {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        login () {
          // v-validate 체크
          this.$validator.validateAll()
          // error가 하나라도 있으면 에러
          if (this.errors.any()) {
            alert('로그인 실패')
          } else {
            alert('로그인 성공')
          }
        }
      },
      components: {
        FormHelper
      }
    }
  </script>