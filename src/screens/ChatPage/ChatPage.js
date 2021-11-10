// import React from 'react'
// import { View, Text } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat'
// import firestore from '@react-native-firebase/firestore'
// import auth from '@react-native-firebase/auth'

// const client = StreamChat.getInstance('api_key');

// const ChatPage = () => {

//     const [messages, setMessages] = useState([
//         {
//           _id: 0,
//           text: 'thread created',
//           createdAt: new Date().getTime(),
//           system: true
//         },
//         {
//           _id: 1,
//           text: 'hello!',
//           createdAt: new Date().getTime(),
//           user: {
//             _id: 2,
//             name: 'Demo'
//           }
//         }
//       ])

//       const [threads, setThreads] = useState([])
//       const [loading, setLoading] = useState(true)
//       const user = auth().currentUser.toJSON()


//       async function handleSend(messages) {
//         const text = messages[0].text
//         // ...
//       }

//       firestore()
//         .collection('requests')
//         .doc(thread._id)
//         .collection('MESSAGES')
//         .add({
//             text,
//             createdAt: new Date().getTime(),
//             user: {
//             _id: user.uid,
//             displayName: user.displayName
//             }
//         })


//       <GiftedChat
//         messages={messages}
//         onSend={handleSend}
//         user={{
//             _id: user.uid
//         }}
//         />

//     //   useEffect(() => {
//     //     const unsubscribe = firestore()
//     //       .collection('MESSAGE_THREADS')
//     //       .orderBy('latestMessage.createdAt', 'desc')
//     //       .onSnapshot(querySnapshot => {
//     //         const threads = querySnapshot.docs.map(documentSnapshot => {
//     //           return {
//     //             _id: documentSnapshot.id,
//     //             name: '',
//     //             latestMessage: { text: '' },
//     //             ...documentSnapshot.data()
//     //           }
//     //         })
    
//     //         setThreads(threads)
//     //         console.log(threads)
//     //         if (loading) {
//     //           setLoading(false)
//     //         }
//     //       })
    
//     //     return () => unsubscribe()
//     //   }, [])
    
//     //   if (loading) {
//     //     return <ActivityIndicator size='large' color='#555' />
//     //   }

//     //   return (
//     //     <View style={styles.container}>
//     //       <FlatList
//     //         data={threads}
//     //         keyExtractor={item => item._id}
//     //         renderItem={({ item }) => (
//     //           <TouchableOpacity onPress={() => alert('Open a message thread')}>
//     //             <View style={styles.row}>
//     //               <View style={styles.content}>
//     //                 <View style={styles.header}>
//     //                   <Text style={styles.nameText}>{item.name}</Text>
//     //                 </View>
//     //                 <Text style={styles.contentText}>
//     //                   {item.latestMessage.text.slice(0, 90)}
//     //                 </Text>
//     //               </View>
//     //             </View>
//     //           </TouchableOpacity>
//     //         )}
//     //         ItemSeparatorComponent={() => <Separator />}
//     //       />
//     //     </View>
//     //   )


    
// }

// export default ChatPage



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#dee2eb'
//     },
//     title: {
//       marginTop: 20,
//       marginBottom: 30,
//       fontSize: 28,
//       fontWeight: '500'
//     },
//     row: {
//       paddingRight: 10,
//       paddingLeft: 5,
//       paddingVertical: 5,
//       flexDirection: 'row',
//       alignItems: 'center'
//     },
//     content: {
//       flexShrink: 1
//     },
//     header: {
//       flexDirection: 'row'
//     },
//     nameText: {
//       fontWeight: '600',
//       fontSize: 18,
//       color: '#000'
//     },
//     dateText: {},
//     contentText: {
//       color: '#949494',
//       fontSize: 16,
//       marginTop: 2
//     }
//   })
