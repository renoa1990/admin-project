<template>
  <v-card>
    <v-card-title>
      충전완료
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: '번호', value: 'id'},
        { text: '아이디', value: 'member_id'},
        { text: '닉네임', value: 'member_nick' },
        { text: '등급', value: 'member_level' },
        { text: '보유머니', value: 'member_money' },
        { text: '보유포인트', value: 'member_point' },
        { text: '접속IP', value: 'member_connectip' },
        { text: '신청시간', value: 'application' },
        { text: '마감시간', value: 'application_confirm' },
        { text: '입금자', value: 'member_name' },
        { text: '입금액', value: 'application_money' },
        { text: '보너스', value: 'application_bonus' },
        { text: '포인트', value: 'application_point' },
        { text: '처리', value: 'btn' },

      ],
      desserts: [
            {
          id: '14',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
            {
          id: '13',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          member_connectip : '128.0.5.22',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
            {
          id: '12',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
            {
          id: '11',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
            {
          id: '10',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '9',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '8',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '7',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '6',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '5',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '4',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '3',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '2',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        {
          id: '1',
          member_id: 'user1',
          member_nick : '김사장',
          member_level : '5',
          member_money : '1200000',
          member_point : '10000',
          application : '12/18(토) 18:19:32',
          application_confirm : '12/18(토) 18:21:32',
          member_name : '김수용',
          application_money : '10000',
          application_bonus : '첫중',
          application_point : '1000'
        },
        
      ]
    }
  }
}
</script>
