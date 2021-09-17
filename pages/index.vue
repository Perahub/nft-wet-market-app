<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';
import Web3 from 'web3';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  },
  // async mounted(){
  //     if (window.ethereum) {
  //       await window.ethereum.send('eth_requestAccounts');
  //       window.web3 = new Web3(window.ethereum);
  //       window.alert(ethereum.selectedAddress);
  //       this.$store.commit('setUserEthAddress', ethereum.selectedAddress);
  //       return true;
  //     }
  //     return false;
  //   }
};
</script>
